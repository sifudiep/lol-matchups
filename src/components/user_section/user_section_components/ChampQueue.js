import React, { Component } from "react";
import QueueObject from "./QueueObject";
import axios from "axios";

class ChampQueue extends Component {
  state = {
    queue: []
  };

  componentDidMount() {
    axios
      .post("http://localhost:2000/api/retrieveQueue", {
        summonerName: localStorage.getItem("summonerName")
      })
      .then(res => {
        console.log(`SUCCESSFUL RESPONSE :`);
        console.log(res.data);
        this.setState({ queue: res.data });
      })
      .catch(err => {
        console.log(`UNSUCCESFUL RESPONSE :`);
        console.log(err);
      });
  }

  render() {
    const queue = this.state.queue.map(queueObject => {
      return (
        <QueueObject
          practiceChampionSelected={queueObject.practiceChampionSelected}
          opponentChampions={queueObject.opponentChampions}
          key={queueObject._id}
        />
      );
    });
    return <div className="userSection__menuView__champQueue">{queue}</div>;
  }
}

export default ChampQueue;
