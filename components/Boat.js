import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

// Ex1: User-defined component Movie with properties title and year
const Boat = ({name, description, icon_name, icon_color, poster, name_color}) => {
    return (
        <View>
            <Text></Text>

            <Text style={{color:name_color,fontWeight: 'italic', fontSize:25}}>
                <FontAwesome6 name={icon_name} size={40} color={icon_color} />
                {name} {name_color}
            </Text>

            <Image source={poster}
                   style={{width:400, height:600}} />
            <Text>{description}</Text>
        </View>
    );
};

export default Boat;