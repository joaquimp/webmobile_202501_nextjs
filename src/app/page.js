import Card from "@/components/Card";

export default function Home() {
  const cards = [
    {title: "Titulo 01", content: "Bla bla bla 01"},
    {title: "Titulo 02", content: "Bla bla bla 02"},
    {title: "Titulo 03", content: "Bla bla bla 03"},
    {title: "Titulo 04", content: "Bla bla bla 04"},
    {title: "Titulo 05", content: "Bla bla bla 05"},
  ]

  return (
   <div className="card_list">
    {cards.map((card) => {
      return (
        <Card title={card.title} content={card.content} />
      )
    })}
   </div>
  )
}
