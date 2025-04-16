# Fundr

This project was developed as part of an ideathon built using ["bolt.new"] to address the funding gap between early-stage startups and potential consumer investors. The current implementation serves as a functional prototype demonstrating the core concepts and user flows of the platform. While the frontend components and basic functionality are in place, this project is not yet production-ready and would require additional features, security enhancements, financial overview, and backend infrastructure development before deployment.

## Overview
Fundr is an innovative crowdfunding platform designed to bridge the gap between small startups and the masses. While similar to Kickstarter in its crowdfunding approach, Fundr differentiates itself by focusing on investment rather than pure product backing.

Our platform empowers both entrepreneurs and ordinary consumers by creating a mutually beneficial investment ecosystem where innovative ideas meet community capital.

## Key Features

### For Startups
- **Create detailed project campaigns** with company information, product details, funding goals, and timelines
- **Choose between investment models**:
  - **Rolling Investment**: Accept funds continuously as they come in, offering investors equity stakes or binding contracts for future shares if the company goes public
  - **Goal-Based Investment**: Receive funds only after reaching the complete funding target, offering smaller rewards like free products or discount codes upon launch
- **Track funding progress** with visual indicators showing percentage of goal reached
- **Share project timelines** to keep investors informed on development progress

### For Investors
- **Browse diverse startup projects** across various industries and categories
- **Invest any amount** towards projects that match your interests
- **Choose investment types** based on your risk tolerance and reward preferences
- **Track your investments** and monitor project progress

## Technical Architecture

Fundr is built using a modern React/TypeScript stack with a responsive design:

- **Frontend**: React with TypeScript, React Router for navigation
- **State Management**: Context API for project data management
- **Styling**: Tailwind CSS for responsive UI components
- **Icons**: Lucide React for beautiful, scalable icons
- **Backend**: Express.js server for production deployment

## Platform Flow

1. **Startups create campaigns** with essential details about their company, product, and funding goals
2. **Campaigns are featured** on the homepage for investors to browse
3. **Investors can view detailed information** about each project including progress, timeline, and rewards
4. **Investments are tracked in real-time** with visual progress indicators
5. **Rewards are distributed** based on the chosen investment model after funding completes or goals are met

## Investment Models

### Equity Investment
When startups choose the rolling investment model, investors receive binding contracts that entitle them to a share of the company should it ever go public. This approach aligns investor interests with the long-term success of the startup.

### Reward-Based Investment
For startups preferring the goal-based model, investors receive tangible rewards like early access to products, special discounts, or exclusive perks when the product launches.

## Getting Started with Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```
5. Start production server:
   ```
   npm start
   ```

## Why Fundr Matters

Traditional startup funding is often limited to wealthy investors or venture capital firms. Fundr democratizes the investment process by allowing ordinary consumers to invest in innovative ideas they believe in, while giving startups access to both funding and an early customer base.

By creating direct connections between startups and their potential customers/investors, Fundr fosters innovation, community engagement, and broader access to capital for entrepreneurs from all backgrounds.
