import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Profile = () => {
    // Dummy user data
    const user = {
        name: "John Doe",
        email: "john@example.com",
        // profilePicture: require('./profile.jpg'), // Provide the path to the profile picture
        bio: "Experienced software engineer with expertise in React Native development.",
        skills: ["React Native", "JavaScript", "Node.js", "UI/UX Design"],
        education: [
            { institution: "University of ABC", degree: "Bachelor of Science in Computer Science", duration: "2011 - 2015" },
        ],
        experience: [
            { company: "ABC Inc.", position: "Senior Software Engineer", duration: "2018 - Present" },
            { company: "XYZ Corp.", position: "Software Developer", duration: "2015 - 2018" },
        ],
    };

    const [showBio, setShowBio] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [showExperience, setShowExperience] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={user.profilePicture} style={styles.profileImage} />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
            <TouchableOpacity style={styles.section} onPress={() => setShowBio(!showBio)}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>• Bio</Text>
                    <AntDesign name={showBio ? "up" : "down"} size={24} color="#000000" />
                </View>
                {showBio && (
                    <View style={styles.box}>
                        <Text style={styles.bio}>{user.bio}</Text>
                    </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.section} onPress={() => setShowSkills(!showSkills)}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>• Skills</Text>
                    <AntDesign name={showSkills ? "up" : "down"} size={24} color="#000000" />
                </View>
                {showSkills && (
                    <View style={styles.box}>
                        <View style={styles.skillContainer}>
                            {user.skills.map((skill, index) => (
                                <Text key={index} style={styles.skill}>{skill}</Text>
                            ))}
                        </View>
                    </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.section} onPress={() => setShowEducation(!showEducation)}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>• Education</Text>
                    <AntDesign name={showEducation ? "up" : "down"} size={24} color="#000000" />
                </View>
                {showEducation && (
                    <View style={styles.box}>
                        {user.education.map((edu, index) => (
                            <View key={index}>
                                <Text style={styles.institution}>{edu.institution}</Text>
                                <Text style={styles.degree}>{edu.degree}</Text>
                                <Text style={styles.duration}>{edu.duration}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.section} onPress={() => setShowExperience(!showExperience)}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>• Experience</Text>
                    <AntDesign name={showExperience ? "up" : "down"} size={24} color="#000000" />
                </View>
                {showExperience && (
                    <View style={styles.box}>
                        {user.experience.map((exp, index) => (
                            <View key={index}>
                                <Text style={styles.company}>{exp.company}</Text>
                                <Text style={styles.position}>{exp.position}</Text>
                                <Text style={styles.duration}>{exp.duration}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75, // Make it round
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#007BFF',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    box: {
        backgroundColor: '#F2F8FD',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#007BFF',
    },
    bio: {
        fontSize: 16,
        color: '#333333',
    },
    skillContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    skill: {
        backgroundColor: '#007BFF',
        color: '#FFFFFF',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    institution: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    degree: {
        color: '#333333',
        marginBottom: 5,
    },
    company: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    position: {
        color: '#333333',
        marginBottom: 5,
    },
    duration: {
        color: '#999999',
    },
});

export default Profile;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>This is your profile page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Profile;