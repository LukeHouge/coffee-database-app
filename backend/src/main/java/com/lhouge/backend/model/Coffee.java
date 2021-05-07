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

	@Column(name = "aroma")
	private Float aroma;
	@Column(name = "body")
	private Float body;
	@Column(name = "flavor")
	private Float flavor;
	@Column(name = "acidity")
	private Float acidity;
	@Column(name = "sweetness")
	private Float sweetness;
	@Column(name = "balance")
	private Float balance;
	@Column(name = "cleanliness")
	private Float cleanliness;
	@Column(name = "aftertaste")
	private Float aftertaste;
	@Column(name = "complexity")
	private Float complexity;

	public Coffee(){}
	
	public Coffee(String title, String roaster, Float price, Float size, Date date, String notes, String link,
			Float score, Float aroma, Float body, Float flavor, Float acidity, Float sweetness, Float balance,
			Float cleanliness, Float aftertaste, Float complexity) {
		this.title = title;
		this.roaster = roaster;
		this.price = price;
		this.size = size;
		this.date = date;
		this.notes = notes;
		this.link = link;
		this.score = score;
		this.aroma = aroma;
		this.body = body;
		this.flavor = flavor;
		this.acidity = acidity;
		this.sweetness = sweetness;
		this.balance = balance;
		this.cleanliness = cleanliness;
		this.aftertaste = aftertaste;
		this.complexity = complexity;
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

	public Float getAroma() {
		return aroma;
	}

	public void setAroma(Float aroma) {
		this.aroma = aroma;
	}

	public Float getFlavor() {
		return flavor;
	}

	public void setFlavor(Float flavor) {
		this.flavor = flavor;
	}

	public Float getBody() {
		return body;
	}

	public void setBody(Float body) {
		this.body = body;
	}

	public Float getComplexity() {
		return complexity;
	}

	public void setComplexity(Float complexity) {
		this.complexity = complexity;
	}

	public Float getAcidity() {
		return acidity;
	}

	public void setAcidity(Float acidity) {
		this.acidity = acidity;
	}

	public Float getSweetness() {
		return sweetness;
	}

	public void setSweetness(Float sweetness) {
		this.sweetness = sweetness;
	}

	public Float getBalance() {
		return balance;
	}

	public void setBalance(Float balance) {
		this.balance = balance;
	}

	public Float getCleanliness() {
		return cleanliness;
	}

	public void setCleanliness(Float cleanliness) {
		this.cleanliness = cleanliness;
	}

	public Float getAftertaste() {
		return aftertaste;
	}

	public void setAftertaste(Float aftertaste) {
		this.aftertaste = aftertaste;
	}

	@Override
	public String toString() {
		return "coffee [id=" + id + ", title=" + title + ", roaster=" + roaster + ", price=" + price + ", size=" + size
				+ ", date=" + date + ", notes=" + notes + ", link=" + link + ", score=" + score + ", aroma=" + aroma
				+ ",body=" + body + ",flavor=" + flavor + ",acidity=" + acidity + ",sweetness=" + sweetness
				+ ",cleanliness=" + cleanliness + ",aftertaste=" + aftertaste + ",complexity=" + complexity + "]";
	}

}