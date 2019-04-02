<?php
class User_model extends CI_Model{
	function newUserAdd($usersData){
		$this->db->select('*');
		$this->db->where('email',$usersData->email);
		$query = $this->db->get('tbluser');
		if ($query->num_rows() > 0) {
			return false;
		}else{
			$this->db->set('username', $usersData->name);		
			$this->db->set('email', $usersData->email);		
			$this->db->set('password', md5($usersData->password));		
			$this->db->set('role', $usersData->role);
			$this->db->insert('tbluser');
			return true;
		}
	}
}
?>