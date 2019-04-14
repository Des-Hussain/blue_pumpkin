<?php 
 defined('BASEPATH') OR exit('No direct script access allowed');

class userController extends CI_Controller{
		/**
	     * @api {post} localhost:8080/blue_pumpkin/server/index.php/userController/createUser Create User From Admin Portal API
	     * @apiName Create User From Admin Portal API
	     * @apiGroup User
	     *
	     * @apiParam {string} fname FirstName
	     * @apiParam {string} lname LastName
	     * @apiParam {string} email Email
	     * @apiParam {string} phone Phone
	     * @apiParam {string} password Password
	     * @apiParam {number} active Active
	     * @apiParam {string} role Role
	     *
	     * @apiSuccess {string} status Status of the request.
	     * @apiSuccess {string} message Message corresponding to request.
	     */
	function createUser(){
		$usersData = json_decode(file_get_contents("php://input"));
		$this->load->model('User_model');
		$res = $this->User_model->newUserAdd($usersData);
		echo json_encode($res);
	}
	public function senddata(){
		echo "Test Funciton";
	}
}