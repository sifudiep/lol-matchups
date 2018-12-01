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
        this.setState({ queue: res.data });
      })
      .catch(err => {
        console.log(`UNSUCCESFUL RESPONSE :`);
        console.log(err);
      });
  }

  render() {
    const deleteQueueObject = id => {
      console.log(`trying ot delete`);
      axios
        .post("http://localhost:2000/api/deleteChampQueueObject", {
          id
        })
        .then(res => {
          axios
            .post("http://localhost:2000/api/retrieveQueue", {
              summonerName: localStorage.getItem("summonerName")
            })
            .then(res => {
              this.setState({ queue: res.data });
            })
            .catch(err => {
              console.log(`UNSUCCESFUL RESPONSE :`);
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    };
    const queue = this.state.queue.map(queueObject => {
      return (
        <QueueObject
          practiceChampionSelected={queueObject.practiceChampionSelected}
          opponentChampions={queueObject.opponentChampions}
          deleteQueueObject={deleteQueueObject}
          matchId={queueObject._id}
          key={queueObject._id}
        />
      );
    });
    return <div className="userSection__menuView__champQueue">{queue}</div>;
  }
}

export default ChampQueue;
