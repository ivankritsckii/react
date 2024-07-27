import './style_404.css'
export function Page404() {
    return (
        <div className="wraper_404">
            <div>
                <div className="main_404">404</div>
                <div className="text_404">Page not found</div>
            </div>
            <img className="img_404" src={'../assets/img_404.jpg'} alt="404" />
        </div>
    )
}
