function Home() {
  return(
    <>
      <h1>Trang Chủ</h1> 
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: 0,
          margin: 0,
          listStyle: "none"
        }}>
          <li className="container">
            <div>
                <p>Home Work</p>
                <p>make a TakeList in Jsx</p>
              </div>
              <div>
                <p>Thursday, 02.06.2026</p>
                <p>10.00 A.M</p>
              </div>
          </li>
          <li className="container">
            <div>
                <p>Home Work</p>
                <p>make a TakeList in Jsx</p>
              </div>
              <div>
                <p>Thursday, 02.06.2026</p>
                <p>10.00 A.M</p>
              </div>
          </li>
          <li className="container">
            <div>
                <p>Home Work</p>
                <p>make a TakeList in Jsx</p>
              </div>
              <div>
                <p>Thursday, 02.06.2026</p>
                <p>10.00 A.M</p>
              </div>
          </li>
          <li className="container">
            <div>
                <p>Home Work</p>
                <p>make a TakeList in Jsx</p>
              </div>
              <div>
                <p>Thursday, 02.06.2026</p>
                <p>10.00 A.M</p>
              </div>
          </li>
      </ul>
      <button onClick={() => setIsOpen(true)}>
            Add Task
      </button>
    </>
    );
}

export default Home;