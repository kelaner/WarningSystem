import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Avatar, Text, FAB } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { DiscussData } from '../../utils';

const Discuss = () => {
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    const renderItem = React.useCallback(({ item }) => {

        return (
            <View style={styles.itemContainer}>
                <Avatar.Text
                    style={[styles.avatar, { backgroundColor: item.bgColor }]}
                    label={item.initials}
                    color={'black'}
                    size={40}
                />
                <View style={styles.itemTextContentContainer}>
                    <View style={styles.itemHeaderContainer}>
                        <Text
                            variant="labelLarge"
                            style={[styles.header, !item.read && styles.read]}
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            {item.sender}
                        </Text>
                        <Text
                            variant="labelLarge"
                            style={[styles.date, !item.read && styles.read]}
                        >
                            {item.date}
                        </Text>
                    </View>

                    <View style={styles.itemMessageContainer}>
                        <View style={styles.flex}>
                            <Text
                                variant="labelLarge"
                                ellipsizeMode="tail"
                                numberOfLines={1}
                                style={!item.read && styles.read}
                            >
                                {item.header}
                            </Text>
                            <Text
                                variant="labelLarge"
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {item.message}
                            </Text>
                        </View>

                        <Icon
                            name={item.favorite ? 'star' : 'star-outline'}
                            color={item.favorite ? 'orange' : 'gray'}
                            size={20}
                            style={styles.icon}
                        />
                    </View>
                </View>
            </View>
        );
    },
    );




    return (
        <>
            <FlatList
                data={DiscussData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={styles.contentContainer}
            />

            <FAB.Group
                open={open}
                icon={open ? 'book' : 'plus'}
                actions={[
                    { icon: 'plus', onPress: () => alert('Tode:Add Press') },
                    {
                        icon: 'star',
                        label: 'Star',
                        onPress: () => alert('Todo:Check Stars'),
                    },
                    {
                        icon: 'bell',
                        label: 'Remind',
                        onPress: () => alert('Todo: Notifications'),
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                        // do something if the speed dial is open
                    }
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop:5,
        padding: 15,
        paddingBottom:-10,
    },
    avatar: {
        marginRight: 15,
        marginTop: 10,
    },
    flex: {
        flex: 1,
    },
    itemContainer: {
        marginBottom: 13,
        flexDirection: 'row',
    },
    itemTextContentContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    itemHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemMessageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow: 1,
    },
    read: {
        fontWeight: 'bold',
    },
    icon: {
        marginLeft: 16,
        alignSelf: 'flex-end',
    },
    date: {
        fontSize: 12,
    },
    header: {
        fontSize: 14,
        marginRight: 8,
        flex: 1,
    },
});

export default Discuss;
