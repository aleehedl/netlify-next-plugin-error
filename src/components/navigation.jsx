import Link from "next/link";
import { useRouter } from "next/router";

const links = {
    en: {
        home: {
            href: "/",
            text: "Home",
        },
        second: {
            href: "/second",
            text: "Second page",
        },
    },
    fi: {
        home: {
            href: "/fi",
            text: "Kotisivu",
        },
        second: {
            href: "/fi/toinen",
            text: "Toinen sivu",
        },
    }
}

export default function Navigation({ locale }) {
    const { push } = useRouter()
    const handleLanguageChange = () =>
        push('/', null, { locale: locale === 'fi' ? 'en' : 'fi' })

    return (
        <nav>
            {Object.values(links[locale]).map(({ href, text }) => (
                <li key={href}><Link href={href} passHref>{text}</Link></li>
            ))}
            <button onClick={handleLanguageChange}>
                {locale === 'fi' ? 'In English' : 'Suomeksi'}
            </button>
        </nav>
    )
}
