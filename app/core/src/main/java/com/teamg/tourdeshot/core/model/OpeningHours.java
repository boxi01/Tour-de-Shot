package com.teamg.tourdeshot.core.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OpeningHours {

    private List<DaySchedule> schedule;
}
