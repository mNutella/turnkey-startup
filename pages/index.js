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
  title: 'Validate Idea',
  items: [
    {
      title: "Search shouldn't be too time consuming",
      desc: 'AI-based search makes browsing more complete by understanding the context of what you are trying to find. <br />  Identify your idea uniqueness and get the most relevant competitors in one click',
      img: 'bg-feat-ai-search',
      type: CORE_FEATURE_ITEM_LEFT_TYPE
    },
    {
      title: "No need to collect and process data yourself",
      desc: 'The most comprehensive database allows you to get all the necessary information in just one place. <br /> You can easily export meaningful and real-time data in your preferred format',
      img: 'bg-feat-database',
      type: CORE_FEATURE_ITEM_RIGHT_TYPE
    },
    {
      title: 'No place for complicated data analytics',
      desc: "Visual representation allows you to get a complete picture of the future product. Extract key metrics from a large amount of data to make the final decision on your idea",
      img: 'bg-feat-dashboard',
      type: CORE_FEATURE_ITEM_LEFT_TYPE
    },
    {
      title: 'API integration without headache',
      desc: "Full access to up-to-date data, insights and audiences allows you to improve your business processes by making them easier for you and more reliable for your customers",
      img: 'bg-feat-social',
      type: CORE_FEATURE_ITEM_RIGHT_TYPE
    }
  ]
}

const FEATURES_DATA = {
  title: 'More Features',
  items: [
    {
      title: 'Idea Inspiration',
      desc: 'Suggestions based on global issues, trends and popular products',
      icon: 'inspiration'
    },
    {
      title: 'Look into',
      desc: 'Identify the strengths, weaknesses and unique features of your competitors',
      icon: 'diamond'
    },
    {
      title: 'Estimation',
      desc: 'Estimation of the idea complexity, time complexity and budget',
      icon: 'estimation'
    },
    {
      title: 'Changelog',
      desc: 'Follow your competitors’ updates and get real-time reports',
      icon: 'logs'
    },
    {
      title: 'Online Presence',
      desc: 'Competitors’ official websites, social media, blogs, white papers',
      icon: 'online-presence'
    },
    {
      title: 'Export Data',
      desc: 'Export the most complete data in your preferred format',
      icon: 'export'
    },
  ]
}

const FAQ_DATA = {
  title: 'FAQ',
  items: [
    {
      title: 'How does search engine work?',
      content: 'AI-based semantic search by title, description, categories, tags, image recognition for a logo, ratings, downloads, and others. The results contain the degree of similarity, weaknesses and strengths, unique features, and much more'
    },
    {
      title: 'What is database?',
      content: 'The continuously updated database provides you with the most relevant experience. <br /> <b>Sources</b>: Google Play, Apple Appstore, Amazon Appstore, Steam, Product Hunt, Hacker News, Github, and others (application marketplaces, product platforms, and online newspapers)'
    },
    {
      title: 'What data is represented in analytics?',
      content: `Idea parameters: <ul class="list-disc ml-8 my-2"> <li>Appearance and visibility</li> <li>Worldwide ranking</li> <li>Category leaderboards</li> <li>Audience</li> <li>Monetization model</li> <li>Weaknesses and strengths</li> <li>Unique features</li></ul>and much more...`
    },
    {
      title: 'What is API?',
      content: "Graphql provides you convenient and flexible access to all projects' data, downloads, ratings, reviews, audiences, appearances, and rankings. <br /> <b>We guarantee you much higher quotes and lower pricing regarding our competitors</b>"
    },
    {
      title: 'What is idea inspiration?',
      content: "A set of trending topics, popular projects, and global issues with a nested structure that allows you to dive deeper into the fields you are interested in and decide on the idea of a startup"
    },
    {
      title: 'What is changelog?',
      content: "Subscribe to competitor updates and receive reports on time not to lose the uniqueness of your own at the development stage"
    }
  ]
}

export default function Home() {
  const urlHelper = useUrlHelper()
  const localAPI = useLocalAPI()

  useEffect(() => {
    const params = urlHelper.getParams()
      ; (async () => await localAPI.createLog(params.get('ref')))()
  }, [])

  return (
    <div className="flex flex-col px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Navbar />
      <Header />
      <WhyWe title={WHY_WE_DATA.title} items={WHY_WE_DATA.items} />
      <CTA
        content="Working on the right thing is probably more important than working hard."
        author="Caterina Fake, Flickr co-founder"
      />
      <Features title={FEATURES_DATA.title} items={FEATURES_DATA.items} />
      <FeedbackForm onSubmit={localAPI.createUser} />
      <FAQ title={FAQ_DATA.title} items={FAQ_DATA.items} />
      <Footer />
    </div>
  )
}
