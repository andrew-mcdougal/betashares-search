# Betashares ETF Search Dashboard

A modern React frontend for exploring Betashares ETFs with **predictive search, filters, pagination, and responsive results**.

---

## Features

- **Predictive Search** – Auto-suggestions as you type, click to select a suggestion  
- **Filters** – Management Type, Max Fund Size, Management Fee, Fund Category  
- **Advanced Filters** – Toggleable to save space  
- **Results Grid** – Responsive cards with fund info  
- **Pagination** – Fixed footer, updates results when page changes  
- **Loading States** – Skeleton UI while fetching results  
- **Responsive Layout** – Stacks nicely on mobile, two-column desktop layout  

---

## Getting Started

### 1. Clone the repository

```
gh repo clone andrew-mcdougal/betashares-search
cd betashares-search
```

### 2. Install dependencies:

```
npm install
```

### 3. Start the development server:

```
npm run dev
```

The app will be available at http://localhost:3000

## Usage

- Use the search bar to type ETF names or symbols
- Refine results using filters
- Toggle advanced filters for more options
- Navigate results using the fixed footer pagination
- Tech Stack
- React + TypeScript
- CSS Modules for styling
- Fetch API for backend integration

## API

Backend search API endpoint:
```
POST https://search.betashares.services/search
```

Payload supports:

- search_text – free text search
- filters – fund_size, management_fee, management_approach, fund_category
- order_by – sort results
- from and size – pagination

## Notes

- Only valid filters are sent to the API
- Skeleton components indicate loading states
- Cards show key fund information (name, fund size, management approach, etc.)