import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
    <div>
        <div class="frame1">
            <div class="header">
                <img class="logo" src="image/logo.png"/>
                <form class='search'>
                    <input type="text" placeholder="What are you looking for?..."/>
                    <button type="submit">Search</button>
                </form>
                <img class="contact-us" src="image/CONTACT US.png"/>
                <img class="Social" src="image/SOCIAL MEDIA.png"/>
            </div>
            <div class="header2">
                <div class="box1">
                    <div>Shop by categories</div>
                    <div>About</div>
                    <div>Blog</div>
                    <div>Contact</div>
                </div>
                <div class="box2">
                    <img src="image/search.png"/>
                    <img src="image/acc.png"/>
                    <img src="image/like.png"/>
                    <img src="image/cart.png"/>
                </div>
            </div>
            <div class="header3">
                <div class="slogan">
                    <div>CHẢ GIÒ</div>
                    <div>CHÀ BÔNG</div>
                    <div class="adjust">CHẤT LƯỢNG</div>
                </div>
                <img class="shopnow" src="image/go to shop.png"/>
                <img class="elispe" src="image/Ellipse 32.png"/>
            </div>
        </div>
        <div class="frame2">
            <div class="letter">SPECIAL PRODUCTS FOR MOST PEOPLE</div>
        </div>
        <div class="frame3">
            <div class="box1">
                <div class="child1">ABOUT</div>
                <div class="child2">NHẤT NAM HƯƠNG</div>
                <div class="child3">MORE ABOUT</div>
            </div>
            <div class="box2">
                <div class="child1"> description description description description description description desdesdes here :)</div>
                <div class="child2"> description description descriptionption description description description descriptioscription description diption description description description description description descriptionion description description description desc</div>
            </div>
            <img class="box3" src="image/vegetable.png"/>
        </div>
        <div class="frame4">
            <button class="box1">TẤT CẢ SẢN PHẨM</button>
            <div class="container1">
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
            </div>
            <div class="container2">
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
            </div>
            <div class="container3">
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
                <div class="invisible-box">
                    <div class="white-box"></div>
                    <div class="name-product">Tên Sản Phẩm</div>
                    <div class="price-product">00.00 VNĐ</div>
                </div>
            </div>
        </div>
        <img class="frame5" src="image/Frame 5.png"/>
        <img class="frame6" src="image/Frame 6.png"/>
        <div class="frame7">
            <div class="invisible-box">
                <div class="box1"> GET IN TOUCH</div>
                <div class="box2">we will make sure that you are the first one to get notification about cur new products</div>
                <div class="box3">Member ships,sale off and more.</div>
            </div>
            <div class="invisible-box2">
                <div class="child1">
                    <div class="letter">Name</div>
                    <input type="grey-box" placeholder="Your full name"/>
                </div>
                <div class="child2">
                    <div class="letter">Email</div>
                    <input type="grey-box" placeholder="Your valid email"/>
                </div>
                <div class="child2">
                    <div class="letter">Phone number</div>
                    <input type="grey-box" placeholder="Your phone number"/>
                </div>
                <div class="child2">
                    <div class="letter">Password</div>
                    <input type="grey-box" placeholder="Create a password"/>
                </div>
                <a class="create" href="##">Create account</a>
            </div>
        </div>
        <img class="frame8" src="image/Frame 8.png"/>
        <img class="frame9" src="image/Frame 9.png"/>
    </div>
        )
    }
}
    
export default Home;