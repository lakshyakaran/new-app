import NavBar from './NavBar'

export default function Layout(props: { children: any }) {
    const { children } = props
    return (
      <div className="ms-Fabric">
          <div style={{display:'flex'}}>
            <div className="ms-Grid-col ms-lg2">
                <NavBar />
            </div>
            <div className="ms-Grid-col ms-lg10">{children}</div>
        </div>
      </div>
    )
}