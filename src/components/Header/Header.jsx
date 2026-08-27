import style from'../Header/Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <h1 className={style.name}>sufiyan</h1>
        <button className={style.btn}>Login</button>
    </div>
  )
}

export default Header
