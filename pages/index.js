import { useEffect } from 'react'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Quote from '../components/Quote'
import FeedbackForm from '../components/FeedbackForm'
import {
  CORE_FEATURE_ITEM_LEFT_TYPE,
  CORE_FEATURE_ITEM_RIGHT_TYPE
} from '../constants/features-block'
import useLocalAPI from '../hooks/useLocalAPI'

const FEATURES_DATA = {
  title: 'Features',
  subtitle: 'More',
  coreFeatures: [
    {
      title: 'AI Search',
      desc: 'AI-based semantic search by logo (image recognition), title, description, categories, tags, ratings, downloads and others. Results contain similarity rate, weaknesses and strengths, unique features and more.',
      img: 'feat-ai-search',
      type: CORE_FEATURE_ITEM_LEFT_TYPE
    },
    {
      title: 'Database',
      desc: 'Most complete database is continuously updated to provide the most actual experience. Sources: Google Play, Apple Appstore, Amazon Appstore, Steam, Product Hunt, Tech Crunch, Github and other platforms (Web, Desktop and Mobile).',
      img: 'feat-database',
      type: CORE_FEATURE_ITEM_RIGHT_TYPE
    },
    {
      title: 'Easy API integration',
      desc: 'Access all apps’ meta-data, insights and audiences from app marketplaces, product platforms and online newspapers via our Advanced Search API. File dumps allows you to ingest a large scale of data.',
      img: 'feat-social',
      type: CORE_FEATURE_ITEM_LEFT_TYPE
    }
  ],
  features: [
    {
      title: 'Compatitors’ online presence',
      desc: 'Official website, social media platforms, blogs, white papers',
      icon: ''
    },
    {
      title: 'Statistics',
      desc: 'Get all metadata including reviews, monetization model and more',
      icon: ''
    },
    {
      title: 'Analytics',
      desc: 'Analyze compatitors’ strengths and weaknesses, unique features, keyword stats, visibility leaderboards',
      icon: ''
    },
    {
      title: 'Prediction',
      desc: 'Estimation of idea complexity, time and budget',
      icon: ''
    },
    {
      title: 'Compatitors’ changelog',
      desc: 'Follow your competitors’ updates and get notifications',
      icon: ''
    },
    {
      title: 'Export data',
      desc: 'View all available metadata for each app. Export the data as a CSV or through our API',
      icon: ''
    },
    {
      title: '20+ languages',
      desc: 'Filter searches by country and language availability',
      icon: ''
    },
    {
      title: 'Idea inspiration',
      desc: 'Suggestions based on actual problems, world trends and popular products',
      icon: ''
    },
    {
      title: 'Trending / Rankings',
      desc: 'See the idea appearance, ranking the worldwide, trendings, category leaderboards',
      icon: ''
    }
  ]
}

export default function Home() {
  const localAPI = useLocalAPI()

  useEffect(() => {
    ;(async () => await localAPI.createLog())()
  }, [])

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
      <Features
        title={FEATURES_DATA.title}
        subtitle={FEATURES_DATA.subtitle}
        features={FEATURES_DATA.features}
        coreFeatures={FEATURES_DATA.coreFeatures}
      />
      <FeedbackForm onSubmit={localAPI.createUser} />
      <Footer />
    </div>
  )
}
