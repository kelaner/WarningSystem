import { StyleSheet, Image, View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import PagerView from 'react-native-pager-view';

const items = [
    require('../../assets/images/index0.jpg'),
    require('../../assets/images/index1.jpg'),
    require('../../assets/images/index2.jpg'),
    require('../../assets/images/index3.jpg'),
    require('../../assets/images/index4.jpg'),
    require('../../assets/images/index5.jpg'),
];

const ImageList = items.map((item, index) =>
    <Image source={item} key={index}
        style={{
            width: '100%',
            height: 200,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
        }} />
)

const Dots = ({ currentPage, totalPages }) => {
    const dots = [];
    for (let i = 0; i < totalPages; i++) {
        dots.push(
            <View key={i}
                style={[styles.dot,
                i === currentPage ? styles.activeDot : null]}
            />
        )
    }
    return (
        <View style={styles.dotContainer}>
            {dots}
        </View>
    )
}


const Carousel = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            let nextPage = currentPage + 1;
            if (nextPage >= items.length) {
                nextPage = 0;
            }

            setCurrentPage(nextPage);
            pagerView.current?.setPage(nextPage);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentPage]);

    const pagerView = React.useRef(null);

    return (
        <View style={styles.container}>
            <PagerView
                style={styles.pagerview}
                initialPage={0}
                pageMargin={10}
                onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
                ref={pagerView}
            >
                {ImageList}
            </PagerView>
            <Dots currentPage={currentPage} totalPages={items.length} />
        </View>

    )
}

export default Carousel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pagerview: {
        width: 300,
        height: 200,
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        position: 'relative',
        top: -30,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: 'black',
    }
})