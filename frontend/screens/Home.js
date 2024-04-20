import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import axios from 'axios';
import SearchResult from '../components/SearchResult';

const Home = ({ route, navigation }) => {
    const [companies, setCompanies] = useState([]);
   const [input,setInput]=useState("")
   const [results,setResult]=useState([])
   const searchCompanies = async () => {
    const options = {
        method: 'GET',
        url: 'https://linkedin-data-scraper.p.rapidapi.com/search_jobs',
        params: {
            query: 'Software developer',
            location: 'Europe',
            page: '1'
        },
        headers: {
            'X-RapidAPI-Key': '2e919a426dmsh3100cbe59a05659p1725e0jsne90fb62cbec1',
            'X-RapidAPI-Host': 'linkedin-data-scraper.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        const obj = response.data.response.jobs;
        const filteredResults = obj.filter((company) => {
            return company.companyName && company.companyName.toLowerCase().includes(input.toLowerCase());
        });
        console.log(filteredResults); // Log company names
        setResult(filteredResults); // Set the results state here
    } catch (error) {
        console.error(error);
    }
}   

    const fetchCompanies = async () => {
        const options = {
            method: 'GET',
            url: 'https://indeed12.p.rapidapi.com/companies/search',
            params: {
                company_name: 'Microsoft'
            },
            headers: {
                'X-RapidAPI-Key': 'ab634b4853msh90f2ad65d56859dp1aab13jsn9fb8d6ef2fd1',
                'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setCompanies(response.data.hits);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCompanies();
    }, []);
    const handleChange = (value) => {
        setInput(value);
    }

    const handleSearch = () => {
        searchCompanies();
    }



    return (
        <View style={styles.container}>
        <View style={styles.searchContainer}>
            <Ionicons name='search' size={24} color='#3F6CDF' />
            <TextInput
                placeholder='Search for Jobs etc..'
                placeholderTextColor='#3F6CDF'
                style={styles.searchInput}
                value={input}
                onChangeText={(value) => handleChange(value)}
            />
            <TouchableOpacity onPress={handleSearch}>
                <Text>Search</Text>
            </TouchableOpacity>
        </View>

        {results.length > 0 && (
            <SearchResult results={results} />
        )}
                

            <View style={styles.header}>
                <View style={styles.greetingContainer}>
                    <Text style={styles.greetingText}>Hello,</Text>
                    <Text style={styles.userName}>John Doe</Text>
                </View>
                <Ionicons name='notifications-outline' size={22} color='#FFF' style={styles.bellIcon} />
            </View>
    
            <View style={{ flex: 0.82, padding: 16 }}>
                <Text style={{ marginVertical: 32, fontSize: 24, fontWeight: '600' }}>Recommended Companies</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {companies.map(company => (
                        <TouchableOpacity
                            key={company.id}
                            style={{
                                backgroundColor: '#FFF',
                                padding: 16,
                                borderRadius: 16,
                                width: 300,
                                marginRight: 16
                            }}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ marginLeft: 8 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>{company.name}</Text>
                                        <Text style={{ fontSize: 12, fontWeight: '400' }}>{company.locality}</Text>
                                    </View>
                                </View>
                                <Ionicons name='bookmark-outline' size={24} color='#000' />
                            </View>

                            <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '600' }}>UI Designer</Text>
                            <Text style={{ fontSize: 12, fontWeight: '400' }}>Senior • Remote • Fulltime</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ backgroundColor: '#3F6CDF', padding: 12, borderRadius: 16 }}>
                                    <Text style={{ color: '#FFF' }}>Apply Now</Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 18, fontWeight: '500' }}>$100K/year</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 36,
    },
    header: {
        flex: 0.18,
        backgroundColor: 'blue',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between', // Aligns bell icon to the right
        alignItems: 'center', // Aligns items vertically
    },
    greetingContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Aligns items to the top
    },
    greetingText: {
        color: '#FFF',
        marginRight: 4, // Adds spacing between "Hello," and the username
        marginTop: -32
    },
    userName: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: '600',
        marginTop: -32
    },
    bellIcon: {
        marginLeft: 'auto', // Pushes the bell icon to the right edge
        marginTop: -64 , // Adjusts the bell icon position vertically
    },
    searchContainer: {
        backgroundColor: '#FFF',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 72, // Adjusted to top position
        left: 16, // Adjusted to left position
        right: 16, // Adjusted to right position
        zIndex: 2, // Ensure the search bar is above other elements
    },
    searchInput: {
        marginLeft: 8,
        flex: 1,
    },
});

export default Home;