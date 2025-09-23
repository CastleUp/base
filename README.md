# Base Smart Contracts

[English](#english) | [Русский](#русский)

---

## English

### 📖 Project Description
This repository contains smart contracts written in Solidity for deployment on the [Base](https://base.org) blockchain (both **Base Sepolia Testnet** and **Base Mainnet**).  
The contracts were developed and tested using the [Hardhat](https://hardhat.org) framework.  

### ⚙️ Requirements
- Node.js >= 18
- npm or yarn
- Hardhat
- Solidity ^0.8.28

### 📦 Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/base-contracts.git
cd base-contracts
npm install
```
🔑 Environment Variables

Create a .env file in the root directory with the following content:
```
PRIVATE_KEY=0xYourPrivateKey
BASESCAN_API_KEY=YourBaseScanApiKey
```

🚀 Deployment

Deploy to Base Sepolia Testnet:
```
npx hardhat deploy --network baseSepolia
```

Deploy to Base Mainnet:
```
npx hardhat deploy --network base
```

✅ Verification

To verify a contract on BaseScan
:
```
npx hardhat verify --network base <contract_address> <constructor_arguments>
```

```
📂 Project Structure
├── contracts/       # Solidity contracts
├── deploy/          # Deployment scripts
├── scripts/         # Utility scripts
├── test/            # Tests
├── hardhat.config.js
```

-------------------

## Русский

📖 Описание проекта

Этот репозиторий содержит смарт-контракты на языке Solidity для развёртывания в блокчейне Base
 (Base Sepolia Testnet и Base Mainnet).
Контракты разработаны и протестированы с использованием фреймворка Hardhat
.

⚙️ Требования
```
Node.js >= 18

npm или yarn

Hardhat

Solidity ^0.8.28
```
📦 Установка

Клонируйте репозиторий и установите зависимости:
```
git clone https://github.com/your-username/base-contracts.git
cd base-contracts
npm install
```
🔑 Переменные окружения

Создайте файл .env в корне проекта:
```
PRIVATE_KEY=0xВашПриватныйКлюч
BASESCAN_API_KEY=ВашAPIключСBaseScan
```
🚀 Деплой

На Base Sepolia Testnet:
```
npx hardhat deploy --network baseSepolia
```

На Base Mainnet:
```
npx hardhat deploy --network base
```
✅ Верификация

Для верификации контракта на BaseScan:
```
npx hardhat verify --network base <адрес_контракта> <аргументы_конструктора>
```

```
📂 Структура проекта
├── contracts/       # Solidity контракты
├── deploy/          # Скрипты деплоя
├── scripts/         # Утилиты
├── test/            # Тесты
├── hardhat.config.js
```

