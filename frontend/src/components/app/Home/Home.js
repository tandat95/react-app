import './Home.scss';
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Container } from "../../base/Container/Container";
import { Button } from '../Button/Button';

class Home extends Component {

    homeStore = this.props.appStore.homeStore;

    onBtn1Click = () => {
        this.homeStore.increase();
    }
    render() {
        return (
            <Container className="home-container">

                <Container>
                    {`Count: ${this.homeStore.count}`}
                </Container>

                <Container
                    style={{
                        color: this.homeStore.isCountOver3 ? 'red' : 'white'
                    }}
                >
                    {`More than 3: ${this.homeStore.isCountOver3}`}
                </Container>

                <Button
                    text="Button 1"
                    onClick={this.onBtn1Click}
                />

            </Container>
        );
    }
}

Home = inject('appStore')(observer(Home));
export { Home };
