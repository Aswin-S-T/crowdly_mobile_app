import {
	View,
	Text,
	Image,
	StyleSheet,
	Button,
	Dimensions,
	ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import SpinnerComponent from "../Components/SpinnerComponent";
import Post from "../Components/Post";
const HomeScreen = () => {
	const screenWidth = Dimensions.get("window").width;
	const [posts, setPost] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`https://crowdly-2.onrender.com/api/v1/user/all-post`)
			.then((response) => {
				setPost(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<ScrollView>
			<Header />
			<View>
				{loading ? (
					<SpinnerComponent />
				) : (
					<View>
						<Post posts={posts} />
					</View>
				)}
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 15,
	},
	text: {
		color: "blue",
		fontSize: 18,
		fontSize: 25,
		fontWeight: "bold",
	},
	thumb: {
		width: 40,
		height: 40,
		borderRadius: "50%",
	},
	postHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
		backgroundColor: "white",
		padding: 15,
	},
	postImage: {
		marginTop: 10,
		fontSize: 20,
		fontWeight: 500,
	},
	followBtn: {
		backgroundColor: "blue",
		borderRadius: 10,
	},
	postImage: {
		width: 100,
	},
	postActions: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		flex: 1,
	},
	icons: {
		fontSize: 26,
	},
	line: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		marginVertical: 10,
	},
});
