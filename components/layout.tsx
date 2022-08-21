import Header from './header'
import Footer from './footer'

export default function Layout({ children }: any) {
    return (
        <div>
            <Header />
            <div className="p-1 md:p-5 lg:p-10 2xl:px-40 align-center bg-stone-400">
                {children}
            </div>
            <Footer />
        </div>
    )
} 