import './style_404.css'
import image from '../assets/img_404.jpg'

export function Page404() {
    return (
        <div className="wraper_404">
            <div>
                <div className="main_404">404</div>
                <div className="text_404">Page not found</div>
            </div>
            <img className="img_404" src={image} alt="404" />
        </div>
    )
}
