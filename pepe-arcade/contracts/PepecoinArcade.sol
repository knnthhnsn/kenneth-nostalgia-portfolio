// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract PepecoinArcade {
    address public owner;
    address public pepecoinAddress = 0xA9E8aCf069C58aEc8825542845Fd754e41a9489A;
    
    uint256 public constant ENTRY_FEE = 1 * 10**18; 
    uint256 public constant CYCLE_SIZE = 60;
    
    // Payout split: 25 (1st), 10 (2nd), 5 (3rd), 20 (Dev) = 60 total
    uint256 public constant PAYOUT_1ST = 25 * 10**18;
    uint256 public constant PAYOUT_2ND = 10 * 10**18;
    uint256 public constant PAYOUT_3RD = 5 * 10**18;
    uint256 public constant PAYOUT_DEV = 20 * 10**18;

    struct Player {
        address addr;
        uint256 score;
        string name;
    }

    // Top 3 Leaderboard
    Player[3] public topPlayers;
    uint256 public gameCount;

    event GamePlayed(address indexed player, uint256 totalGames);
    event PayoutTriggered(address indexed p1, address indexed p2, address indexed p3, uint256 totalAmount);
    event NewHighScore(address indexed player, uint256 score, uint256 rank);

    constructor() {
        owner = 0xAfBDfCDfa5454E45aa9AeE833DF87cC3Ec511d1b;
    }

    function playGame() external {
        require(IERC20(pepecoinAddress).transferFrom(msg.sender, address(this), ENTRY_FEE), "Transfer failed");
        
        gameCount++;
        emit GamePlayed(msg.sender, gameCount);

        if (gameCount >= CYCLE_SIZE) {
            _triggerPayout();
        }
    }

    function submitScore(uint256 score, string memory name) external {
        // Find if score fits in Top 3
        int8 rank = -1;
        if (score > topPlayers[0].score) {
            rank = 0;
        } else if (score > topPlayers[1].score) {
            rank = 1;
        } else if (score > topPlayers[2].score) {
            rank = 2;
        }

        if (rank >= 0) {
            _updateLeaderboard(uint8(rank), msg.sender, score, name);
            emit NewHighScore(msg.sender, score, uint256(uint8(rank) + 1));
        }
    }

    function _updateLeaderboard(uint8 rank, address addr, uint256 score, string memory name) internal {
        // Shift lower ranks down
        if (rank == 0) {
            topPlayers[2] = topPlayers[1];
            topPlayers[1] = topPlayers[0];
        } else if (rank == 1) {
            topPlayers[2] = topPlayers[1];
        }
        
        // Insert new score
        topPlayers[rank] = Player(addr, score, name);
    }

    function _triggerPayout() internal {
        // Distribute to Top 3
        if (topPlayers[0].addr != address(0)) {
            IERC20(pepecoinAddress).transfer(topPlayers[0].addr, PAYOUT_1ST);
        } else {
            IERC20(pepecoinAddress).transfer(owner, PAYOUT_1ST);
        }

        if (topPlayers[1].addr != address(0)) {
            IERC20(pepecoinAddress).transfer(topPlayers[1].addr, PAYOUT_2ND);
        } else {
            IERC20(pepecoinAddress).transfer(owner, PAYOUT_2ND);
        }

        if (topPlayers[2].addr != address(0)) {
            IERC20(pepecoinAddress).transfer(topPlayers[2].addr, PAYOUT_3RD);
        } else {
            IERC20(pepecoinAddress).transfer(owner, PAYOUT_3RD);
        }

        // Distribute Dev share
        IERC20(pepecoinAddress).transfer(owner, PAYOUT_DEV);

        emit PayoutTriggered(topPlayers[0].addr, topPlayers[1].addr, topPlayers[2].addr, 60 * 10**18);

        // Reset
        gameCount = 0;
        delete topPlayers;
    }

    function emergencyWithdraw() external {
        require(msg.sender == owner, "Not owner");
        uint256 balance = IERC20(pepecoinAddress).balanceOf(address(this));
        IERC20(pepecoinAddress).transfer(owner, balance);
    }
}
