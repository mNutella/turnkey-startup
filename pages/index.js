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
      title: 'Advanced Search',
      desc: 'AI-based semantic search by logo (image recognition), title, description, categories, tags, ratings, downloads and others. The results contain the degree of similarity, weaknesses and strengths, unique features and much more',
      img: 'bg-feat-ai-search',
      type: CORE_FEATURE_ITEM_LEFT_TYPE
    },
    {
      title: 'Gigantic Database',
      desc: 'The continuously updated database to provide you the most relevant experience. <br /> Sources: Google Play, Apple Appstore, Amazon Appstore, Steam, Product Hunt, Tech Crunch, Github and others (Web, Desktop and Mobile)',
      img: 'bg-feat-database',
      type: CORE_FEATURE_ITEM_RIGHT_TYPE
    },
    {
      title: 'Powerful Easy-To-Use API',
      desc: "Access all projects' data, dowloads, ratings, reviews, audiences, appearances, analytics and rankings via our Advanced Search API. Find the projects you're really looking for, subscribe for updates about their new features, and get real-time notifications",
      img: 'bg-feat-social',
      type: CORE_FEATURE_ITEM_LEFT_TYPE
    }
  ],
  features: [
    {
      title: 'Compatitors’ Online Presence',
      desc: 'Official website, social media, blogs, white papers',
      icon: 'online-presence'
    },
    {
      title: 'Statistics',
      desc: 'Get all the metadata including reviews, monetization model and much more',
      icon: 'statistics'
    },
    {
      title: 'Analytics',
      desc: 'Analyze the strengths and weaknesses of compatitors, their unique features',
      icon: 'analytics'
    },
    {
      title: 'Estimation',
      desc: 'Estimation of the idea complexity, time complexity and budget',
      icon: 'estimation'
    },
    {
      title: 'Compatitors’ Changelog',
      desc: 'Follow your competitors’ updates and get notifications',
      icon: 'logs'
    },
    {
      title: 'Export Data',
      desc: 'Export all available metadata as CSVs or file dumps',
      icon: 'export'
    },
    {
      title: '20+ Languages',
      desc: 'Filter the search by country and language availability',
      icon: 'languages'
    },
    {
      title: 'Idea Inspiration',
      desc: 'Suggestions based on current global issues, global trends and popular products',
      icon: 'inspiration'
    },
    {
      title: 'Ratings',
      desc: "See the idea's appearance and visibility, worldwide ranking and category leaderboards",
      icon: 'ratings'
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
        titlePrimary="Tech"
        titleSecondary="idea research"
        desc={`Identify your real competitors, improve your idea and become `}
        ctaBtnText="Request early access"
      />
      <Quote
        content="So often people are working hard at the wrong thing. Working on the right thing is probably more important than working hard."
        author="Caterina Fake, Flickr co-founder"
      />
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
