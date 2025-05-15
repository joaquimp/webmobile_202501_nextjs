import Counter from "./Counter";

export default function Card({ title, content }) {

  return (
    <section className="card">
      <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKhH_PeJa8hywEaHWx-GRn3-AAzyb8lLDZw&s" />
        <div className="card_title">
            {title}
        </div>
      </header>
      <div className="card_content">
        {content}
      </div>
      <Counter />
    </section>
  )
}