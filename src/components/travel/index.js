import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class Travel extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.points = [
            {
                name: "Chicago",
                position: {
                    lat: 41.934673,
                    lng: -87.642415
                },
                photos: [
                    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/33817047_1901883603205595_4011931523879010304_n.jpg?_nc_cat=102&oh=ee1797f230bc301289b6c1f206c87adc&oe=5C1DB6BE",
                    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/26165471_1751832048210752_264446210470064190_n.jpg?_nc_cat=105&oh=67e8ab5a208900ede18dba324280fd5a&oe=5C56CBFC"
                ]
            },
            {
                name: "New York City",
                position: {
                    lat: 40.712472,
                    lng: -73.997482
                },
                photos: [
                    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/15590199_1506931269320369_8383421104733782459_n.jpg?_nc_cat=103&oh=f11699ed61a84b3592d270e710ea6b68&oe=5C23F598",
                    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/15492386_1506931255987037_7985908836642579540_n.jpg?_nc_cat=102&oh=ee3f80ef85907ae5b1d236c10d45b6e2&oe=5C15F52B",
                    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/15541639_1506259682720861_7545367016410505501_n.jpg?_nc_cat=106&oh=d366d73be7667566c7136d468942fe9a&oe=5C57303C"
                ]
            },
            {
                name: "Iowa State University",
                position: {
                    lat: 42.026666,
                    lng: -93.646626
                },
                photos: [
                    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/p206x206/32752009_1891093527617936_1062383065726189568_n.jpg?_nc_cat=100&oh=63ea632a964345c955f47b572073ebcc&oe=5C157885",
                    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/p206x206/31957025_1880443518682937_7984532279881891840_n.jpg?_nc_cat=100&oh=6ccf1ae44e5ef0d66ec0b1ce919cfa32&oe=5C5DF23B",
                    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/21432994_1644956002231691_3178269125155520735_n.jpg?_nc_cat=108&oh=ee9844f4f84cab89e30555ccb984e49d&oe=5C201874"
                ]
            },
            {
                name: "University of Kansas",
                position: {
                    lat: 38.954361,
                    lng: -95.255807
                },
                photos: [
                    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/16997886_1445725692154724_6693108545224262402_n.jpg?_nc_cat=111&oh=bb0d1489a675a60f51c617e0dda99fab&oe=5C286346",
                    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/11150320_890734040949695_7892893742067548839_n.jpg?_nc_cat=101&oh=b87339673b44831e6fb17da94c22e532&oe=5C1CF0DF"
                ]
            }
        ];
        this.state = {
            active: 0
        };
    }
    onMarkerClick(index) {
        this.setState({active: index})
    }
    render() {
        return <div ref={this.props.travel} className="flex flex-col h-screen overflow-hidden pt-8">
            <h2 className="font-accent text-black hover:text-red self-center">Travel</h2>
            <div className="flex-1 flex flex-col md:flex-row mt-4 relative overflow-hidden border-2 border-black">
                <div className="flex-1 relative w-auto h-auto">
                    <Map google={this.props.google}
                         initialCenter={this.points[0].position}
                         center={this.points[this.state.active].position}
                         zoom={5}
                    >
                        {
                            this.points.map((point, index) => {
                                return <Marker key={index} position={point.position} onClick={() => this.onMarkerClick(index)}
                                        name={point.name} />
                            })
                        }
                    </Map>
                </div>
                <div className="w-full overflow-auto z-10 md:w-1/3 lg:w-1/4 bg-black">
                    <div className="min-h-full min-w-full flex flex-row md:flex-col items-center md:items-start">
                        {
                            this.points.map((point, index) => {
                                return <div onClick={() => this.onMarkerClick(index)} key={index}
                                        className="p-4">
                                    <div className={(this.state.active === index ? "text-red": "text-white") +
                                    " whitespace-no-wrap hover:text-red cursor-pointer"}>{point.name}</div>
                                    <div className={(this.state.active === index ? "md:flex overflow-x-auto" : "") + " hidden pt-4"}>
                                        {
                                            this.points[this.state.active].photos.map((photo, subindex) => {
                                                return <img key={index+"."+subindex} className="h-12 w-auto mr-4 cursor-pointer" src={photo} alt="IMG" />
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDdjMbj7Cenz9MWPewTwoIzVhX3giJauTY")
})(Travel);