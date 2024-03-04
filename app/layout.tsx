import './globals.scss';
import LayoutRoot from './layout.c';


export const metadata = {
	title: 'Trello with NURi',
	description: 'Generated by create next app Nuri!'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
			<LayoutRoot>{children}</LayoutRoot>
			</body>
		</html>
	);
}
