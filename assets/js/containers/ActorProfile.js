import React, { Component } from "react";
import ReactDom from "react-dom";
import { fetchSearchAll } from "../actions/search";
import { fetchSearchDetails } from "../actions/selected";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MiddleNavigation from "../components/MiddleNavigation.js";

class ActorProfile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  selectedItem = item => {
    let id = item.id;
    this.props.fetchSearchDetails(id);
    this.props.history.push("/moviedetails");
  };

  showResults = () => {
    if (!this.props.actor.movies) {
      <div className="loading-screen">Loading...</div>;
    } else if (this.props.actor.movies.cast) {
      return this.props.actor.movies.cast.map((item, i) => {
        return (
          <div
            className="search-item"
            key={i}
            onClick={() => this.selectedItem(item)}
          >
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : `/img/blankPerson.png`
              }
            />
            <h1>{item.title ? item.title : item.name}</h1>
            <h2>{item.character}</h2>
            <h3>{item.release_date ? item.release_date.slice(0, 4) : ""}</h3>
          </div>
        );
      });
    }
  };

  actorAge = birthday => {
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  render() {
    if (this.props.actor === undefined) {
      return <h1>loading</h1>;
    }

    return (
      <section id="actor-details">
        <MiddleNavigation
          history={this.props.history}
          fetchSearchAll={this.props.fetchSearchAll}
        />
        <div className="container">
          <div className="actor-profile">
            <div className="actor-img">
              <img
                src={
                  this.props.actor.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${
                        this.props.actor.profile_path
                      }`
                    : `/img/blankPerson.png`
                }
              />
              <div className="details">
                <h1>{this.props.actor.name}</h1>
                <h2>
                  <span style={{ color: "orange" }}>Born: </span>
                  {this.props.actor.place_of_birth}
                </h2>
                <h2>
                  <span style={{ color: "orange" }}>Gender: </span>
                  {this.props.actor.gender == 1 ? "Female" : " Male"}{" "}
                </h2>
                <h2>
                  <span style={{ color: "orange" }}>Age: </span>{" "}
                  {this.actorAge(this.props.actor.birthday)}
                </h2>
                <h2>
                  <span style={{ color: "orange" }}>Birthdate: </span>
                  {this.props.actor.birthday}
                </h2>
              </div>
            </div>
            <div className="actor-bio">
              <p>
                {this.props.actor.biography
                  ? this.props.actor.biography
                  : "No Biography Found"}
              </p>
            </div>
          </div>
          <div className="sectionTitle">
            <h1>Movies Known for</h1>
          </div>

          <div className="actor-roles-container">{this.showResults()}</div>
        </div>
      </section>
    );
  }
}

function mapStatetoProps(state) {
  return {
    actor: state.actor
  };
}
export default connect(
  mapStatetoProps,
  { fetchSearchAll, fetchSearchDetails }
)(ActorProfile);
