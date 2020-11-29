import React from "react";
import "./AddItemPage.css";
import VendorContext from "../../context/VendorContext";
import AuthContext from '../../context/AuthContext'
import TokenService from "../../services/TokenService";
import { API_ENDPOINT } from '../../config';

class AddItemPage extends React.Component {
  constructor() {
    super();
    this.state = {
      formComplete: false,
      error: null,
    };
  }

  postItem = (e, id) => {
    const { name, img, description, itemCount, itemPrice } = e.target;
    //get the current date in unix format 
    const timeElapsed = Date.now(); 
    //conver the unix format date into string
    const today = new Date(timeElapsed);
    
    const item = {
      users_id: id,
      img: img.value,
      name: name.value,
      itemcount: itemCount.value,
      itemprice: itemPrice.value,
      description: description.value,
      date_created: today.toISOString() //converting to this format "2020-06-13T18:30:00.000Z"

    };



    return fetch(`${API_ENDPOINT}/items`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },

      body: JSON.stringify(item),
    })
    .then((response) => response.json())

            .then((data) => {
             
                // this.setState({
                //     recipesFound: data.results
                // });
               
            })

            .catch((err) => {
            
            });

  };

  onSubmit = async (e, id) => {
    e.preventDefault()
    await this.postItem(e, id);
    this.setState = {
      formComplete: true,
    };

    this.props.history.push("/inventory");
  };

  render() {
    return (
      <AuthContext.Consumer>
        { user => (
      <VendorContext.Consumer>
        {(value) => (
          <div className="form-container">
      
            <form className="forms" onSubmit={(e) => this.onSubmit(e, user.currentUser.id)}>
              <h1>Add to your Inventory!</h1>
              <div className="img-form">
                <label className="img-field-lablel" htmlFor="vendorName">
                  Item img
                </label>
                <div className="img-field">
                    <input className="img-field-input"
                    type="hidden"
                    id="img"
                    name="img"
                    className="Item img--input"
                    type="text"
                    maxLength="255"
                    required
                    value="img"
                  />
                </div>
              </div>
              <div className="form">
                <label className="vendorName--label" htmlFor="vendorName">
                  Item Name
                </label>
                <div>
                  <input
                    id="name"
                    name="name"
                    className="Item Name--input"
                    type="text"
                    maxLength="255"
                    required
                  />
                </div>
              </div>
              <div className="form">
                <label className="description" htmlFor="description">
                  Item Description
                </label>
                <div>
                  <input
                    id="description"
                    name="description"
                    className="description"
                    type="text"
                    maxLength="255"
                    required
                  />
                </div>
              </div>
              <div className="form">
                <label
                  className="vendorDescription--label"
                  htmlFor="vendorPrice"
                >
                  Item price
                </label>
                <div>
                  <input
                    id="itemPrice"
                    name="itemPrice"
                    className="vendorDescription--itemprice"
                    type="text"
                    maxLength="255"
                    required
                  />
                </div>
              </div>
              <div className="form">
                <label
                  className="vendorDescription--label"
                  htmlFor="vendorItemCount"
                >
                  Item count
                </label>
                <div>
                  <input
                    id="itemCount"
                    name="itemCount"
                    className="vendorDescription--itemcount"
                    type="text"
                    maxLength="255"
                    required
                  />
                </div>
              </div>
              <div className="form-button">
                <button type="submit">Add Item</button>
              </div>

              <div>
                <p>
                  Check out your inventory{" "}
                  <a href="/inventory" alt="">
                    here
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
      </VendorContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default AddItemPage;
