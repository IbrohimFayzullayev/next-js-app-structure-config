import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout/Layout.jsx'
import NProgress from 'nprogress'

import '../styles/styles.scss'
import '../styles/helper.scss'
import '../public/styles/nprogress.css'


const EmptyProvider = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	const ContextProvider = Component.provider || EmptyProvider

	useEffect(() => {
		const handleStart = () => NProgress.start()
		const handleStop = () => NProgress.done()

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleStop)
		router.events.on('routeChangeError', handleStop)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleStop)
			router.events.off('routeChangeError', handleStop)
		}
	}, [router])

	return (
          <Layout>
			<ContextProvider>
				<Component {...pageProps} />
			</ContextProvider>
		  </Layout>
	)
}

export default MyApp
