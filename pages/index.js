
import HomeLayout from '../layouts/HomeLayout'
import Counters from '../page_components/home/Counters'
import Download from '../page_components/home/Download'
import DownloadAlternative from '../page_components/home/DownloadAlternative'
import Features from '../page_components/home/Features'
import Hero from '../page_components/home/Hero'
import Invite from '../page_components/home/Invite'
import ListPresentation from '../page_components/home/ListPresentation'
import Presentation from '../page_components/home/Presentation'
import Services from '../page_components/home/Services'
import Steps from '../page_components/Steps'


export default function Home() {
  return (
    <HomeLayout title={"Orea - Anasayfa"}>
      <Hero />
      <Counters />
      <Invite />
      <Steps />
      <Presentation />
      <Features />
      <Services />
      <ListPresentation />
      <Download />
      <DownloadAlternative />
    </HomeLayout>
  )
}
