import React from 'react';
import response from './response';
import Search from './Search';
import { Link } from 'react-router-dom'
import './SearchPage.css'
import { useStateValue } from './StateProvider';
import UseGoogleSearch from './useGoogleSearch';
import SearchIcon from '@material-ui/icons/Search';
import Description from '@material-ui/icons/Description'
import Image from '@material-ui/icons/Image'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Room from '@material-ui/icons/Room'
import MoreVert from '@material-ui/icons/MoreVert'

const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue()

//    LIVE API CALL     
//    const { data } = UseGoogleSearch(term);

    const data = response

    console.log(data)

    return (
        <div className='serachPage'>            
            <div className='searchPage__header'>
                <Link to="/">
                    <img 
                        className='searchPage__logo'
                        src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                        alt=""
                    />
                </Link>

                <div className='searchPage__headerBody'>
                    <Search hideButtons />

                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Description />
                                <Link to="/news">News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Image />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOffer />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Room />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVert />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className='searchPage__optionsRight'>
                        <div className='searchPage__option'>
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            {true && (
                <div className='searchPage__result'>
                    <p className='searchPage__resultCount'>
                         About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term} 
                    </p>
                    
                    {data?.items.map(item => (
                        <div className='searchPage__results'>
                            <a href={item.link} className='searchPage__resultsLink'>
                                {item.displayLink}
                            </a>
                            <a className='searchPage__resultsTitle' href={item.link}>
                                <h2 className='sp__rt'>{item.title}</h2>
                            </a>
                            <p className='searchPage__resultSnippet'>
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;
