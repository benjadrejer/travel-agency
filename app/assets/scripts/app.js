import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

const mobileMenu = new MobileMenu();
const revealFeatureItems = new RevealOnScroll($('.feature-item'), '85%');
const revealTestimonials = new RevealOnScroll($('.testimonial'), '60%');