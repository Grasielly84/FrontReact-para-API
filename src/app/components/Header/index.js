import Link from 'next/link'

export default function Header() {
	return (
		<header className="header">
			<img src="/Logo NorDestinos Tour.png" alt="logo" />
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/Destinos">Destinos</Link>
				</li>
				<li>
					<Link href="/">Cadastro</Link>
				</li>
			</ul>
		</header>
	)
}