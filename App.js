import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Boat from './components/Boat.js';

class L2Boats extends React.Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Text></Text>
                    <Text> Get a Boat - For Sale </Text>
                </View>

                <Boat
                    name="Sea Ray 500 Sundancer"
                    description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    icon_name="sailboat"
                    icon_color="red"
                    poster={require("./img/sea_ray.jpg")}
                />

                <Boat
                    name="Four Winns Horizon 180"
                    description="A sporty look and refined details truly set the Horizon 180 above all others."
                    icon_name="sailboat"
                    icon_color="orange"
                    poster={require("./img/four_winns.jpg")}
                />
                <Boat
                    name="Flipper 640 ST"
                    description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    icon_name="sailboat"
                    icon_color="yellow"
                    poster={require("./img/flipper.jpg")}
                />

                <Boat
                    name="Princess V48"
                    description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                    icon_name="sailboat"
                    icon_color="green"
                    poster={require("./img/princess.jpg")}
                />
                <Boat
                    name="Bayliner 175 Bowrider"
                    description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    icon_name="sailboat"
                    icon_color="blue"
                    poster={require("./img/bayliner.jpg")}
                />

                <Boat
                    name="Fairline Targa 47"
                    name_color='purple'
                    description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    icon_name="sailboat"
                    icon_name2="6"
                    icon_color="purple"
                    poster={require("./img/fairline.jpg")}
                />
                <text> end </text>
            </ScrollView>
        );
    }
}

export default L2Boats;


