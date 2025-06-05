


# 🧾 WorkLedger : On-Chain Work Reviews DApp

Welcome to the frontend repository for **WorkLedger**, a decentralized application that enables users to leave **on-chain reviews**, tips, and ratings for work done verifiable, immutable, and censorship-resistant.

Built with a seamless Web3 user experience in mind.

## 🔗 Live DApp

🌐 [Launch WorkLedger](https://workledger-frontend.vercel.app/)

## 📖 Blog

📝 [How I Built WorkLedger](https://vermayash1881.medium.com/how-i-built-workledger-a-dapp-for-on-chain-work-reviews-bc0c6a4e50c1)

## 📁 Repositories

- Smart Contracts → [workledger-contract](https://github.com/Yash-verma18/workledger-contract)
- Frontend (You are here) → [workledger-frontend](https://github.com/Yash-verma18/workledger-frontend)

---

## ⚙️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Wagmi](https://wagmi.sh/) + [RainbowKit](https://www.rainbowkit.com/)
- [Ethers.js](https://docs.ethers.org/v5/)
- Smart Contracts: [Foundry](https://book.getfoundry.sh/)

---

## 🚀 Features

- ✅ Connect Wallet (RainbowKit)
- ✅ Submit testimonial with message, work description, rating, and optional tip
- ✅ All data stored on-chain (Work, Reviewer, Rating, Timestamp, ETH Tip)
- ✅ Reviews are fetched and sorted by most recent
- ✅ Responsive, modern UI with smooth UX
- ✅ Sepolia network support

---

## 🛠️ Setup & Installation

1. **Clone the repo**

```bash
git clone https://github.com/Yash-verma18/workledger-frontend.git
cd workledger-frontend
````

2. **Install dependencies**

```bash
yarn install
```

3. **Configure environment variables**

Create a `.env.local` file with:

```bash
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_CHAIN_ID=11155111
```

4. **Run the dev server**

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 Learn More

* 🔬 All testimonials are retrieved using `readContract()` from `viem`
* 🧾 Each transaction links to [Sepolia Etherscan](https://sepolia.etherscan.io/)
* ⚡ Uses `Framer Motion` for comic-style animated card interactions
* 🔍 Wallet timeline layout inspired by comic panels

---

## 📷 UI Preview

| Submit Testimonial             | View Testimonials                    |
| ------------------------------ | ------------------------------------ |
| ![Submit](./asset/form.gif) | ![Testimonials](./asset/carrd.gif) |


---

## 🤝 Contributing

PRs welcome. Please follow conventional commits and ensure clean code. Open an issue if you'd like to suggest something new!

---

## 📬 Contact

👨‍💻 Made with ❤️ by [Yash Verma](https://yash-verma.me)
📬 Reach out via [Twitter](https://x.com/raymax0x) | [LinkedIn](https://linkedin.com/in/yashverma1881)

---

## 📜 License

[MIT](LICENSE)

```

```
