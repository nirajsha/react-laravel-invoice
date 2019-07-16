import React from 'react'
import './Home.css';
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

export const Home = () => (
  <div class="features_items mt-5">
						<h2 class="title text-center">Features Items</h2>
                        <div className="row">
						<div class="col-sm-4">
							<div class="product-image-wrapper">
								<div class="single-products">
										<div class="productinfo text-center">
                                        <Image src="./assets/banner.jpg" fluid />
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
											<Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
										</div>
										<div class="product-overlay">
											<div class="overlay-content">
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
											</div>
										</div>
								</div>
								<div class="choose">
									<ul class="nav nav-pills nav-justified">
										<li><Link to="#"><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
										<li><Link to="#"><i class="fa fa-plus-square"></i>Add to compare</Link></li>
									</ul>
								</div>
							</div>
						</div>
                        
						<div class="col-sm-4">
							<div class="product-image-wrapper">
								<div class="single-products">
									<div class="productinfo text-center">
										<img src="images/home/product2.jpg" alt=""/>
										<h2>$56</h2>
										<p>Easy Polo Black Edition</p>
										<Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
									</div>
									<div class="product-overlay">
										<div class="overlay-content">
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
											<Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
										</div>
									</div>
								</div>
								<div class="choose">
									<ul class="nav nav-pills nav-justified">
										<li><Link to="#"><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
										<li><Link to="#"><i class="fa fa-plus-square"></i>Add to compare</Link></li>
									</ul>
								</div>
							</div>
                        </div>
						<div class="col-sm-4">
							<div class="product-image-wrapper">
								<div class="single-products">
									<div class="productinfo text-center">
										<img src="images/home/product3.jpg" alt=""/>
										<h2>$56</h2>
										<p>Easy Polo Black Edition</p>
										<Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
									</div>
									<div class="product-overlay">
										<div class="overlay-content">
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
											<Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
										</div>
									</div>
								</div>
								<div class="choose">
									<ul class="nav nav-pills nav-justified">
										<li><Link to="#"><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
										<li><Link to="#"><i class="fa fa-plus-square"></i>Add to compare</Link></li>
									</ul>
								</div>
							</div>
						</div>
                        </div>
                    
                        </div>
					
					
					
)
