import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import axios from 'axios';
import SearchResult from '../components/SearchResult';
import Navigation from '../components/Navigation';

const Home = ({ route, navigation }) => {
    const [companies, setCompanies] = useState([]);
   const [input,setInput]=useState("")
   const [results,setResults]=useState([])
   const [companies1,setCompanies1]=useState([])
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
          'X-RapidAPI-Key': '885f253d0amshfbfa138878fdb78p1772fdjsna5ff4f7d2d00',
          'X-RapidAPI-Host': 'linkedin-data-scraper.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        const obj = response.data.response.jobs;
        const filteredResults = obj.filter((company) => {
            return company.companyName && company.companyName.toLowerCase().startsWith(input.toLowerCase()) ;
        });
        console.log(filteredResults); // Log company names
        setResults(filteredResults); // Set the results state here
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
                'X-RapidAPI-Key': '2e919a426dmsh3100cbe59a05659p1725e0jsne90fb62cbec1',
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

    const fetchCompanies2=async()=>{
        
const options = {
    method: 'GET',
    url: 'https://indeed12.p.rapidapi.com/company/Ubisoft/jobs',
    params: {start: '1'},
    headers: {
      'X-RapidAPI-Key': '2e919a426dmsh3100cbe59a05659p1725e0jsne90fb62cbec1',
      'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
      setCompanies1(response.data.hits)
  } catch (error) {
      console.error(error);
  }
    }

    useEffect(() => {
        fetchCompanies();
    }, []);
    const handleChange = (value) => {
        setInput(value);
    }

    const handleSearch = () => {
        searchCompanies();
    }

    useEffect(()=>{
        fetchCompanies2()
    },[])



    return (
        <View style={styles.container}>
            <View>
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
                </View>

            <View style={styles.header}>
                <View style={styles.greetingContainer}>
                    <Text style={styles.greetingText}>Hello,</Text>
                    <Text style={styles.userName}>John Doe</Text>
                </View>
                <Ionicons name='notifications-outline' size={22} color='#FFF' style={styles.bellIcon} />
            </View>
    
            <View style={{ flex: 0.82, padding: 8 }}>
    <Text style={{ marginVertical: 32, fontSize: 24, fontWeight: '600' }}>Recommended Companies</Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {companies.map(company => (
            <TouchableOpacity
                key={company.id}
                style={{
                    backgroundColor: '#FFF',
                    padding: 8, // Decreased padding
                    borderRadius: 16,
                    width: 250, // Adjusted width
                    marginRight: 16,
                    flexDirection: 'column', // Make the container a column
                    justifyContent: 'flex-start', // Align children at the start vertically
                    height:200
                
                }}
            >
                {/* Company Information */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginLeft: 8 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>{company.name}</Text>
                            <Text style={{ fontSize: 12, fontWeight: '400' }}>{company.locality}</Text>
                        </View>
                    </View>
                    <Ionicons name='bookmark-outline' size={24} color='#000' />
                </View>
            
                {/* Job Information */}
                <Text style={{ marginTop: 12, fontSize: 16, fontWeight: '600' }}>company rank :{company.rank}</Text>
                <Text style={{ fontSize: 12, fontWeight: '400' }}>Senior • Remote • Fulltime</Text>
            
                {/* Apply Now Button */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ backgroundColor: '#3F6CDF', padding: 8, borderRadius: 16 }}>
                        <Text style={{ color: '#FFF', fontSize: 14 }}>Apply Now</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>$100K/year</Text>
                </View>
            </TouchableOpacity>
        ))}
    </ScrollView>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {companies1.map(company => (
            <TouchableOpacity
                key={company.id}
                style={{
                    backgroundColor: '#FFF',
                    padding: 8, // Decreased padding
                    borderRadius: 16,
                    width: 250, // Adjusted width
                    marginRight: 16,
                    flexDirection: 'column', // Make the container a column
                    justifyContent: 'flex-start', // Align children at the start vertically
                    height:200,
                    marginTop:20
                
                }}
            >
                {/* Company Information */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginLeft: 8 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>{company.title}</Text>
                            <Text style={{ fontSize: 12, fontWeight: '400' }}>{company.locality}</Text>
                        </View>
                    </View>
                    <Ionicons name='bookmark-outline' size={24} color='#000' />
                </View>
            
                {/* Job Information */}
                <Text style={{ marginTop: 12, fontSize: 16, fontWeight: '600' }}>Location :{company.location}</Text>
                <Text style={{ fontSize: 12, fontWeight: '400' }}>Senior • Remote • Fulltime</Text>
            
                {/* Apply Now Button */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ backgroundColor: '#3F6CDF', padding: 8, borderRadius: 16 }}>
                        <Text style={{ color: '#FFF', fontSize: 14 }}>Apply Now</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>$100K/year</Text>
                </View>
            </TouchableOpacity>
        ))}
    </ScrollView>
    <Navigation/>

</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 36,
        flexDirection: 'column', // Adjusted to column layout
        padding: 16, // Added padding to container
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
        marginBottom: 16, // Added margin bottom
    },
    searchInput: {
        marginLeft: 8,
        flex: 1,
    },
    recommendedCompaniesContainer: {
        flex: 1, // Adjusted flex to take remaining space
    }
});

export default Home;