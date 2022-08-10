import { FaReact} from 'react-icons/fa'
import { DiReact, DiAndroid, DiGithubBadge, DiAptana } from 'react-icons/di'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex 
    flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaReact size='28'/>} text="React"/>
      <SideBarIcon icon={<DiAndroid size='28'/>} text="Android"/>
      <SideBarIcon icon={<DiGithubBadge size='28'/>} text="GitHub"/>
      <SideBarIcon icon={<DiAptana size='28'/>} text="Config" />
    </div>
  )
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100 group-hover:opacity-100">
      {text}
    </span>
  </div>
)

export default SideBar