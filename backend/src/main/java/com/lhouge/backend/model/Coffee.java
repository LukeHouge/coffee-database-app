package com.lhouge.backend.model;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "coffees")
public class Coffee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "title")
	private String title;

	@Column(name = "roaster")
	private String roaster;

	@Column(name = "price")
	private Float price;

	@Column(name = "size")
	private Float size;

	@Column(name = "date")
	private Date date;

	@Column(name = "notes")
	private String notes;

	@Column(name = "link")
	private String link;

	@Column(name = "score")
	private Float score;

	public Coffee() {

	}

	public Coffee(String title, String roaster, Float price, Float size, Date date, String notes, String link,
			Float score) {
		this.title = title;
		this.roaster = roaster;
		this.price = price;
		this.size = size;
		this.date = date;
		this.notes = notes;
		this.link = link;
		this.score = score;
	}

	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getRoaster() {
		return roaster;
	}

	public void setRoaster(String roaster) {
		this.roaster = roaster;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public Float getSize() {
		return size;
	}

	public void setSize(Float size) {
		this.size = size;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public Float getScore() {
		return score;
	}

	public void setScore(Float score) {
		this.score = score;
	}

	@Override
	public String toString() {
		return "coffee [id=" + id + ", title=" + title + ", roaster=" + roaster + ", price=" + price + ", size=" + size
				+ ", date=" + date + ", notes=" + notes + ", link=" + link + ", score=" + price + "]";
	}

}