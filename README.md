# AI-Powered Marketing Analytics Dashboard

A modern, responsive analytics dashboard built with Next.js 14+ (App Router) and Tailwind CSS. This dashboard provides comprehensive marketing analytics with real-time updates, interactive charts, and AI-powered insights.

## 🚀 Features

### Core Features
- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Real-time Updates**: Simulated live data updates every 5 seconds
- **Interactive Charts**: Line, bar, and pie charts using Recharts
- **Advanced Data Table**: Sorting, filtering, pagination, and CSV export
- **Date Range Filtering**: Custom date range selection with preset options

### Analytics Components
- **Metric Cards**: Four interactive cards showing Revenue, Users, Conversions, and Growth
- **Revenue Trends**: Line chart displaying daily revenue over time
- **User Growth**: Bar chart showing monthly user acquisition
- **Conversion Sources**: Pie chart breakdown of traffic sources
- **Campaign Performance**: Detailed table with comprehensive metrics

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean, professional design with smooth animations
- **Performance Optimized**: Efficient rendering and minimal bundle size
- **Accessible**: WCAG compliant with proper ARIA labels
- **SEO Ready**: Optimized meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **Charts**: Recharts for interactive data visualization
- **Icons**: Lucide React for consistent iconography
- **Theme**: next-themes for dark/light mode
- **Utilities**: date-fns, clsx, tailwind-merge
- **Notifications**: react-hot-toast for user feedback

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-powered-analytics-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── charts-section.tsx   # Charts container component
│   ├── data-table.tsx       # Interactive data table
│   ├── date-range-filter.tsx # Date range selector
│   ├── header.tsx           # Top navigation header
│   ├── metric-cards.tsx     # KPI metric cards
│   ├── sidebar.tsx          # Side navigation
│   └── theme-toggle.tsx     # Dark/light mode toggle
└── lib/
    ├── mock-data.ts         # Sample data and interfaces
    └── utils.ts             # Utility functions
```

## 🎨 Design System

The dashboard uses a comprehensive design system with:

- **Color Palette**: Semantic colors for light and dark themes
- **Typography**: Consistent font hierarchy and spacing
- **Components**: Reusable UI components with variants
- **Animations**: Smooth transitions and micro-interactions
- **Spacing**: Consistent spacing scale throughout

## 📊 Data Structure

The dashboard uses TypeScript interfaces for type safety:

```typescript
interface Metrics {
  revenue: number
  users: number
  conversions: number
  growth: number
}

interface Campaign {
  id: string
  name: string
  status: 'active' | 'paused' | 'completed'
  budget: number
  spent: number
  // ... additional fields
}
```

## 🔧 Customization

### Adding New Metrics
1. Update the `Metrics` interface in `src/lib/mock-data.ts`
2. Add the metric to the `metricConfig` array in `src/components/metric-cards.tsx`
3. Update the mock data with your new metric values

### Adding New Charts
1. Create a new chart component using Recharts
2. Add it to the `ChartsSection` component
3. Update the data interfaces as needed

### Styling Customization
- Modify CSS variables in `src/app/globals.css`
- Update Tailwind configuration in `tailwind.config.js`
- Customize component styles in individual component files

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Lazy Loading**: Components load on demand
- **Optimized Images**: Next.js Image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Efficient caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Recharts](https://recharts.org/) for the charting library
- [Lucide](https://lucide.dev/) for the beautiful icons

---

Built with ❤️ using Next.js and Tailwind CSS # AI-Powered-Analytics-Dashboard
