import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Quote from '../components/Quote/Quote'

const FEATURES_DATA = [
  {
    title: 'AI Search',
    desc: 'Filter searches by country and language availability',
    icon: ''
  },
  {
    title: 'Database',
    desc: 'Most complete up-to-date database from app marketplaces, product platforms and online newspapers',
    icon: ''
  },
  {
    title: 'Analytics',
    desc: "Analyze compatitors' strengths and weaknesses, unique features; keyword stats, visibility leaderboards",
    icon: ''
  },
  {
    title: 'Prediction',
    desc: 'Estimation of idea complexity, time and budget',
    icon: ''
  },
  {
    title: 'Changelog',
    desc: "Follow your competitors' updates",
    icon: ''
  },
  {
    title: 'Export data (CSV)',
    desc: 'View all available metadata for each app. Export the data as a CSV or through our API',
    icon: ''
  },
  {
    title: 'File dumps',
    desc: 'Large-scale data ingestion',
    icon: ''
  },
  {
    title: 'Brand protection',
    desc: 'Protect your brand name and logo from stealing',
    icon: ''
  },
  {
    title: 'Trending / Rankings',
    desc: 'See the idea appearance, ranking the worldwide, trendings, category leaderboards',
    icon: ''
  }
]

export default function Home() {
  return (
    <div className="flex flex-col px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Navbar />
      <Header
        titlePrimary="One-click"
        titleSecondary="idea research"
        desc="Identify your real competitors, improve your idea and go to the moon"
        ctaBtnText="Request early access"
      />
      <Quote />
      <Features title="Features" features={FEATURES_DATA} />
      <Footer />
    </div>
  )
}
