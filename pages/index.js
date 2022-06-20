import Head from 'next/head'
import HomePage from './home';



export default function Home() {
 
  return (
    <>
      {/* ============= head title set ==================== */}
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />


        <title>Digital Agency</title>
      </Head >
      <HomePage />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js" integrity="sha512-n/4gHW3atM3QqRcbCn6ewmpxcLAHGaDjpEBu4xZd47N0W2oQ+6q7oc3PXstrJYXcbNU1OHdQ1T7pAP+gi5Yu8g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


    </>
  )
}
