import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar />

      <main>
        <div className="cards">
          <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFmqSsdT6cK-mlNVWRrcL9mFphXtGEOaLxA&usqp=CAU" title="Shanks" desc="I am the captain of the Red Haired Pirates. I am one among the 4 Emperors of the Sea" color="Red" />
          <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IuuDjoVX1X4nogT6N9ZqKE9uoTYkU8eSzQ&usqp=CAU" title="Luffy" desc="I am the captain of the Straw Hat Pirates. I am one among the 4 Emperors of the Sea" color="White"/>
          <Card img="https://www.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/b1a6fa3a8d964ef69d6bb633c4e68d17.jpe" title="Blackbeard" desc="I am the captain of the Blackbeard Pirates. I am one among the 4 Emperors of the Sea" color="Black" />
          <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1hhuRvR0nzIF5TF7kkxa8IbbtsGnrdbxLyJXZ36tRVm8luD2JGp75dRUM0sJBlDahMc&usqp=CAU" title="Buggy" desc="I am the captain of the Buggy Pirates. I am one among the 4 Emperors of the Sea" color="Blue" />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
