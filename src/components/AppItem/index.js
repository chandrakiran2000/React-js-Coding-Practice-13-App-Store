import './index.css'

// Write your code here

const AppItem = props => {
  const {eachList} = props
  const {appName, imageUrl} = eachList // appId,category

  return (
    <li className="ap-item-card">
      <img className="ap-item-img" src={imageUrl} alt={appName} />
      <p className="ap-name">{appName}</p>
    </li>
  )
}

export default AppItem
