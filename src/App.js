import React from "react";
import Scooter from "./components/Scooter";
import "./styles.css";

export class App extends React.Component {
  state = {
    scooters: [
      {
        marked: false,
        name: "XIAOMI MIJIA M365",
        battery: '30%',
        costHour: 500,
        img: "https://boom-room.ru/wa-data/public/shop/products/29/78/7829/images/17714/17714.600.jpg",
      },
      {
        marked: false,
        name: "SEGWAY-NINEBOT ES4",
        battery: '90%',
        costHour: 600,
        img: "https://img.mvideo.ru/Pdb/10024782b.jpg",
      },
      {
        marked: false,
        name: "RAZOR POWER A2",
        battery: '50%',
        costHour: 400,
        img: "https://images.ru.prom.st/865204410_skladnoj-detskij-elektrosamokat.jpg",
      },
      {
        marked: false,
        name: "XIAOMI MIJIA M365 PRO",
        battery: '60%',
        costHour: 800,
        img: "https://msk.igrywka.ru/upload/iblock/8e8/8e8af754c6a41ecfbfc3bcb950db0193.jpg",
      }
    ],
  };

  //constructor(props){
  //super(props);
  //this.handleMarked=this.handleMarked.bind(this); //вопрос, если bind использовать здесь, то как передать еще scooter.name
  //}

  handleMarked(name) {
    console.log(name);
    const scoots = this.state.scooters.concat();
    const scoot = scoots.find((s) => s.name === name);
    scoot.marked = !scoot.marked;
    this.setState({ scooters: scoots });
  }

  renderScooters() {
    return this.state.scooters.map((scooter) => {
      return (
        <Scooter
          scooter={scooter}
          key={scooter.name + Math.random()}
          onMarked={() => this.handleMarked(scooter.name)}
        />
      );
    });
  }

  listScooters(){
    let content=[];
    for (let scooter of this.state.scooters){
      content.push(
        <Scooter
          scooter={scooter}
          key={scooter.name + Math.random()}
          onMarked={() => this.handleMarked(scooter.name)}
        />
      )
    }
    return content;
  }

  render() {
    return (
      <div className="App">
        <div className="list">
          {this.listScooters()}
        </div>
      </div>
    );
  }
}

export default App;
