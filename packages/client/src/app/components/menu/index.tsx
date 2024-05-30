
const Menu = ()=>{

  return (
    <ul className="menu menu-vertical px-8 xl:menu-horizontal">
      <li><a className="active">音乐馆</a></li>
      <li>
        <details open>
          <summary>
            我的音乐
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>收藏夹</a></li>
            <li><a>播放历史</a></li>
          </ul>
        </details>
      </li>
    </ul>
  )
}

export default Menu;