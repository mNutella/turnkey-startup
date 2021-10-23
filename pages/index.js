import { useEffect } from 'react'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import Features from '../components/Features'
import FeedbackForm from '../components/FeedbackForm'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import WhyWe from '../components/WhyWe'
import {
  CORE_FEATURE_ITEM_LEFT_TYPE,
  CORE_FEATURE_ITEM_RIGHT_TYPE
} from '../constants/features-block'
import useLocalAPI from '../hooks/useLocalAPI'
import useUrlHelper from '../hooks/useUrlHelper'

const WHY_WE_DATA = {
  title: 'Use Us For',
  items: [
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
    },
    {
      title: 'Powerful Analytics & Statistics',
      desc: "Analyze the strengths and weaknesses of compatitors, their unique features, and get all the metadata including reviews, monetization model and much more",
      img: 'bg-feat-dashboard',
      type: CORE_FEATURE_ITEM_RIGHT_TYPE
    }
  ],
}
const FEATURES_DATA = {
  title: 'More Features',
  items: [
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
const FAQ_DATA = {
  title: 'FAQ',
  items: [
    {
      title: 'How does it work?',
      content: 'This is super easy'
    },
    {
      title: 'How does it work?',
      content: 'This is super easy'
    },
    {
      title: 'How does it work?',
      content: 'This is super easy'
    },
    {
      title: 'How does it work?',
      content: 'This is super easy'
    },
  ]
}

export default function Home() {
  const urlHelper = useUrlHelper()
  const localAPI = useLocalAPI()

  useEffect(() => {
    const params = urlHelper.getParams()
    ;(async () => await localAPI.createLog(params.get('ref')))()
  }, [])

  return (
    <div className="flex flex-col px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Navbar />
      <Header />
      <WhyWe title={WHY_WE_DATA.title} items={WHY_WE_DATA.items} />
      <CTA
        content="So often people are working hard at the wrong thing. Working on the right thing is probably more important than working hard."
        author="Caterina Fake, Flickr co-founder"
      />
      <Features
        title={FEATURES_DATA.title}
        items={FEATURES_DATA.items}
      />
      <FeedbackForm onSubmit={localAPI.createUser} />
      <FAQ title={FAQ_DATA.title} items={FAQ_DATA.items} />
      <Footer />
    </div>
  )
}
